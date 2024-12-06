const _data = Array(10).fill("Category").map((item: string, index: number) => {
    return {
        id: index + 1,
        name: item + " " + (index + 1),
        code: `CATE ${index + 1}`,
        status: (index + 1) % 2 === 0
    }
})

export {_data}