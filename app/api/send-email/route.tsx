import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    // await resend.emails.send({
    //     from: 'kevingarry97@gmail.com',
    //     to: 'kevin@techaffinity.com',
    //     subject: 'Testing',
    //     react: <WelcomeTemplate name="Kevin" />
    // })

    return NextResponse.json({message: 'Sent Successfully ....'})
}