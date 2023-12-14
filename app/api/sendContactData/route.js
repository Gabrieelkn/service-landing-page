import { sendMail } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const { name, email, message } = data;

  const a = await sendMail(
    `Mesaj de la ${name}`,
    `<div>
    <p>${message}</p>
   <p>Email:${email}</p>
    </div>`
  );

  return NextResponse.json(a);
}
