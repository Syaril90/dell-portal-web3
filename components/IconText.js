function IconText({ Icon, Text }) {
    return (
        <div className="flex space-x-2">
            <div className="">
                <Icon className="h-5 w-5 text-gray-700" />
            </div>
            <div className="text-xs text-grey-700">{Text}</div>
        </div>

    )
}

export default IconText