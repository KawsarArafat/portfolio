import iimage from "../assets/galaxy.jpg";
import '../index.css';



const LandingPage = () => {
    return (
        // ...existing code...
    <div className="relative w-full font-sans" style={{ minHeight: "500vh" }}>
        {/* Full background image */}
    <div
        className="fixed inset-0 w-full h-full bg-cover bg-center z-0 animate-pulse-slow"
        style={{
            backgroundImage: `url(
                https://images.hdqwalls.com/download/galaxy-stars-4k-7j-3840x2400.jpg)`,
            opacity: 0.4,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    ></div>
</div>
// ...existing code...
    );
};

export default LandingPage;