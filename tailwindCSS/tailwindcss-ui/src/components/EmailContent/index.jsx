import EmailData from "./EmailData"
import EmailTitle from "./EmailTitle"
import EmailCloseButton from "./EmailCloseButton"

/* eslint-disable react/prop-types */
export default function EmailContent({ email, setOpenEmail }) {
    const sendDate = new Date(email.createdAt)
    const openEmailDate = `${sendDate.toLocaleDateString()}, ${sendDate.toLocaleTimeString()}`
    return (
        <div
            className="
                p-2 md:p-4 absolute lg:relative h-full w-full
                bg-gray-100 dark:bg-gray-700
                text-gray-900 dark:text-gray-50
                grow-[2] basis-96
            "
        >
            <EmailCloseButton onClick={() => setOpenEmail(null)}  />
            <EmailTitle>{email.subject}</EmailTitle>
            <EmailData>De: {`<${email.from}>`}</EmailData>
            <EmailData>Para: {`<michxcrz@gmail.com>`}</EmailData>
            <EmailData>Em: {openEmailDate}</EmailData>
            <hr className="my-4" />
            {email.body}
        </div>
    )
}