const data = {
    "destination_addresses": ["Mysuru, Karnataka, India"],
    "origin_addresses": ["Bengaluru, Karnataka, India"],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "144 km",
                        "value": 144344
                    },
                    "duration": {
                        "text": "3 hours 13 mins",
                        "value": 11562
                    },
                    "duration_in_traffic": {
                        "text": "3 hours 23 mins",
                        "value": 12184
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}

function format(data){
    const source = data.origin_addresses[0].split(', ')[0]
    const destination  = data.destination_addresses[0].split(', ')[0]
    const distance = data.rows[0].elements[0].distance.text
    const duration = data.rows[0].elements[0].duration.text
    return `The distance between ${source} and ${destination} is ${distance} and time taken to travel is ${duration}`
}

console.log(format(data))
//The distance between Bengaluru and Mysuru is 144 km and time taken to travel is 3 hours 13 mins