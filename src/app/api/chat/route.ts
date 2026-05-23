import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { query } = await req.json();

        if (!query?.trim()) {
            return NextResponse.json(
                { error: 'Query is required' },
                { status: 400 }
            );
        }

        const filePath = path.join(
            process.cwd(),
            'src/Data/DATA.md'
        );

        if (!fs.existsSync(filePath)) {
            return NextResponse.json(
                { error: 'DATA.md file not found' },
                { status: 404 }
            );
        }

        const portfolioContext = fs.readFileSync(
            filePath,
            'utf-8'
        );

        const systemInstruction = `
You are Harshal Patil's AI Portfolio Assistant.

Answer professionally and naturally.

ONLY use the portfolio context below.

If information is unavailable, say:
"I'm not sure about that, but you can connect directly with him."

PORTFOLIO CONTEXT:
${portfolioContext}
`;

        const completion =
            await groq.chat.completions.create({
                model: 'llama-3.3-70b-versatile',

                messages: [
                    {
                        role: 'system',
                        content: systemInstruction,
                    },
                    {
                        role: 'user',
                        content: query,
                    },
                ],

                temperature: 0.7,

                stream: true,
            });

        const encoder = new TextEncoder();

        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of completion) {
                        const content =
                            chunk.choices[0]?.delta?.content || '';

                        controller.enqueue(
                            encoder.encode(content)
                        );
                    }

                    controller.close();
                } catch (err) {
                    controller.error(err);
                }
            },
        });

        return new Response(stream, {
            headers: {
                'Content-Type':
                    'text/plain; charset=utf-8',

                'Cache-Control': 'no-cache',

                Connection: 'keep-alive',
            },
        });
    } catch (error) {
        console.error(
            'Portfolio AI Error:',
            error
        );

        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : 'Internal Server Error',
            },
            {
                status: 500,
            }
        );
    }
}