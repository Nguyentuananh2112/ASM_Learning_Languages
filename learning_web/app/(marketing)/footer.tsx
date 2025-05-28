export const Footer = () => {
    return (
        <footer className="hidden lg:flex h-20 w-full border-t-2 border-slate-200 p-2 items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-16">
                <img src="/cn.svg" alt="China" className="w-12 h-11 rounded-lg shadow-md object-cover" />
                <img src="/fr.svg" alt="France" className="w-12 h-11 rounded-lg shadow-md object-cover" />
                <img src="/jp.svg" alt="Japan" className="w-12 h-11 rounded-lg shadow-md object-cover" />
                <img src="/kr.svg" alt="Korea" className="w-12 h-11 rounded-lg shadow-md object-cover" />
                <img src="/vn-flag.svg" alt="Vietnam" className="w-12 h-11 rounded-lg shadow-md object-cover" />
            </div>
        </footer>
    )
}