const WristSizeSelector = ({ wristSize, setWristSize }) => {
    const sizes = [
        { label: 'S', price: 69 },
        { label: 'M', price: 79 },
        { label: 'L', price: 89 },
        { label: 'XL', price: 99 },
    ];

    return (
        <div>
            <h2 className="text-lg font-semibold mb-0.5">Wrist Size</h2>
            <div className="flex space-x-4">
                {sizes.map((size) => (
                    <button
                        key={size.label}
                        onClick={() => setWristSize(size.label)}
                        className={`px-4 py-2 border rounded ${wristSize === size.label
                                ? 'border-blue-500'
                                : 'border-gray-300'
                            }`}
                    >
                        <span className={`${wristSize === size.label ? "text-blue-500 font-semibold" : "font-semibold"}`} >{size.label}</span> <span className="text-gray-500">${size.price}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WristSizeSelector;