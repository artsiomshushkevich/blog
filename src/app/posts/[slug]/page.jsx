export default function SpecificPostPage({ params }) {
    return (
        <main>
            <h1>Param name is {params.slug}</h1>
        </main>
    );
}
