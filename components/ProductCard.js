import { ChipIcon, DatabaseIcon, DesktopComputerIcon, ServerIcon, StarIcon, CurrencyDollarIcon } from "@heroicons/react/solid";
import IconText from "./IconText";

function ProductCard({ product: { name, imagePath, ratingStar, ratingNumber, normalPrice, actualPrice, cpu, ram, disk, windows, description, orderCode } }) {
    return (
        <div className="flex flex-col m-3 p-3 w-64 shadow-md">
            <div className="flex justify-center">
                <img className="align-middle w-32" src={imagePath} alt="" />
            </div>

            <div className="text-l text-blue-500">{name}</div>
            <div className="flex items-center">
                <StarIcon className="pr-2 w-7 h-7 text-yellow-400" />
                <div className="">{ratingStar}</div>
                <div className="">({ratingNumber})</div>
            </div>
            <div className="text-sm">Starting Price <strike>RM {normalPrice}</strike></div>
            <div className="flex items-center space-x-2">
                <div className="text-xl font-bold">RM {actualPrice}</div>
                <div className="text-sm">Save <span className="text-green-700">RM {normalPrice - actualPrice}</span></div>
            </div>

            <div className="text-sm">Price above includes Tax and Delivery</div>
            <div className=""></div>
            <div className=" my-2 border border-gray-500 border-dashed"></div>
            <div className="space-y-1">
                <IconText Icon={ChipIcon} Text={cpu} />
                <IconText Icon={ServerIcon} Text={ram} />
                <IconText Icon={DatabaseIcon} Text={disk} />
                <IconText Icon={DesktopComputerIcon} Text={windows} />
            </div>
            <div className="flex py-3 items-center space-x-3">
                <div className="text-xs">Colors:</div>
                <div className="bg-gray-600 h-5 w-5 rounded-full"></div>
            </div>
            <div className="text-xs">{description}</div>
            <div className="py-3 text-xs text-blue-500">View Special Deals</div>
            <div className="flex pb-5 space-x-2 items-center">
                <div className=""><CurrencyDollarIcon className="h-5 w-5" /></div>
                <div className="text-sm">Up to RM 135.00 back <span className="text-blue-500">in rewards</span></div>
            </div>
            <button className="p-2 bg-blue-700 text-white rounded-md">BUY</button>
            {orderCode && <div className="mt-2 text-xs text-gray-500">Order Code {orderCode}</div>}

        </div >

    )
}

export default ProductCard