import { list } from "./jamquery";

const result = list({android: "hello"})

result.then(value => {
    console.log(JSON.parse(value.body));
})
