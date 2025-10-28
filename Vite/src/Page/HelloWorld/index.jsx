import HelloMoon from "../HelloMoon";

const SayHallo = ({ text }) => {
    return (
        <>
            <div className="text-[50] bg-green-50 m-10 p-10 font-serif text-center">
                {text}
            <HelloMoon  />
            </div>
        </>
    )
}

export default SayHallo;