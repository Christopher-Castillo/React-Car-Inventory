const token = '6b390a7c04c1d138668d41737d6e5a69634cdb999819cdeb'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventoryv2.glitch.me/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://car-inventoryv2.glitch.me'
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()

    },

    create: async (data: any = {} ) => {
        const response = await fetch(`https://car-inventoryv2.glitch.me/api/cars`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://car-inventoryv2.glitch.me'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://car-inventoryv2.glitch.me/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://car-inventoryv2.glitch.me'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error(`Failed to update data on server.`)
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://car-inventoryv2.glitch.me/api/cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://car-inventoryv2.glitch.me'
            }
        })

        if (!response.ok){
            throw new Error(`Failed to delete data on server.`),
            console.log(`${id}`)
        }

        return;
    },
}   