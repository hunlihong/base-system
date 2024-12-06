const _data = Array(10).fill("Developer").map((item: string, index: number) => {
    return {
        id: index + 1,
        name: item + " " + (index + 1),
        code: `Dev ${index}`,
        status: (index + 1) % 2 === 0
    }
})

export {_data}