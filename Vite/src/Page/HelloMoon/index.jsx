const HelloMoon = () => {
    let hello = 'hai kamu (child dalam child)'
    return (
        <>
            <div className="text-[50] bg-red-50 m-10 p-10 font-serif text-center">
                {hello}
            </div>
        </>
    )
}

export default HelloMoon;