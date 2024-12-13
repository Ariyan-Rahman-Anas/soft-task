const BandColorSelector = ({ bandColor, setBandColor }) => {
    const colors = [
        { name: 'violet', colorClass: 'bg-violet-500' },
        { name: 'teal', colorClass: 'bg-teal-500' },
        { name: 'blue', colorClass: 'bg-blue-500' },
        { name: 'black', colorClass: 'bg-gray-900' },
    ];

    return (
        <div>
            <h2 className="text-lg font-semibold mb-0.5">Band Color</h2>
            <div className="flex space-x-4">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => setBandColor(color.name)}
                        className={`w-4 h-4 rounded-full ${bandColor === color.name
                            ? `ring ring-offset-2 ring-${color?.name}-500  `
                            : 'border-transparent'
                            } ${color.colorClass}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};
export default BandColorSelector;