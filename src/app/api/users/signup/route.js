import dbConnect from "../../../../dbConfig/dbConfig";
import { NextResponse } from "next/server";
import { genSalt, hash } from "bcryptjs";
import { sendEmail } from "../../../../helpers/mailer";

dbConnect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);
    const User = (await import("../../../../models/userModel")).default;
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const createUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    await sendEmail({ email, emailType: "VERIFY", userId: createUser._id });

    return NextResponse.json(
      {
        status: true,
        message: "User Created Successfully",
        createUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
