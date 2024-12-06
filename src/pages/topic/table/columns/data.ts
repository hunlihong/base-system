const _data = Array(10).fill("Topic").map((item: string, index: number) => {
    return {
        id: index + 1,
        name: item + " " + (index + 1),
        status: (index + 1) % 2 === 0
    }
})

export {_data}