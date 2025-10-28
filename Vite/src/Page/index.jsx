import SayHallo from "./HelloWorld";
// tipe data props adalah object
const Page = ({ text= "Hello World (Parent)" }) => {
    return (
        <>
            <div className="text-[50] bg-blue-50 m-10 p-10 font-serif text-center">
                {text}
            <SayHallo text="Ini comp 1"/> 
            <SayHallo text="Ini comp 2"/> 
            </div>
        </>
    )
}

export default Page;