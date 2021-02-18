
export function makeFakeRequest(data: any) {
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}