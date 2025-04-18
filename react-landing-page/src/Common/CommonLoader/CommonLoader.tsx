import "./CommonLoader.scss";

interface CommonLoaderProps {
    loadingState: boolean;
    message?: string;
}

const CommonLoader = ({ loadingState, message }: CommonLoaderProps) => {
    if (!loadingState) return null;

    return (
        <div className="loader-container">
            <div className="loader-logo">
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
                <div className="loader-message">{message || "Loading..."}</div>
            </div>
        </div>
    );
};

export default CommonLoader;
