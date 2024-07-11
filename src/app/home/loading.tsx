export default function Loading() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // This assumes you want to center it in the viewport. Adjust the height as needed.
            flexDirection: "column"
        }}>
            <h1>Loading...</h1>
        </div>
    );
}