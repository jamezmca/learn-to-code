import MainWrapper from "@/components/MainWrapper";
import Link from "next/link";

export default function NotFound() {
    return (
        <MainWrapper>
            <section className="misc-page">
                <h2>Page not found :(</h2>
                <p className="text-large">404</p>
                <Link href={'/'}>
                    <button>Home</button>
                </Link>
            </section>
        </MainWrapper>
    )
}