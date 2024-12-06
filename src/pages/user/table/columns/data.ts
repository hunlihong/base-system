const _data = Array(10).fill("Thokna").map((item: string, index: number) => {
    return {
        id: index + 1,
        name: item + " " + (index + 1),
        username: item + " " + (index + 1),
        role: "Developer",
        status: (index + 1) % 2 === 0
    }
})

export {_data}