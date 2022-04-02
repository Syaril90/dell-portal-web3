import { ChipIcon, DatabaseIcon, DesktopComputerIcon, ServerIcon, StarIcon, CurrencyDollarIcon } from "@heroicons/react/solid";
import IconText from "./IconText";

function ProductCard({ product: { name, imagePath, ratingStar, ratingNumber, normalPrice, actualPrice, cpu, ram, disk, windows, description } }) {
    return (
        <div className="flex flex-col p-3 w-1/5 shadow-md">
            <div className="flex justify-center">
                <img className="align-middle w-32" src={imagePath} alt="" />
            </div>

            <div className="pt-3 text-l text-blue-500">{name}</div>
            {/* rating */}
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
            {/* color       */}
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
            <div className="text-xs text-gray-500">Order Code hnx93056100sppmy</div>
        </div >

    )
}

export default ProductCard