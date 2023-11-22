const DateService = (startDate, endDate) => {
startDate = startDate.toISOString().slice(0,10);
endDate = endDate.toISOString().slice(0,10);
    let res;
    const fetchData = async () => {
        await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${startDate}&end=${endDate}`)
            .then(response => response.json())
            .then(data => {
                // if (data.error === `Date does not match format YYYY-MM-DD: ${startDate}` || `Date does not match format YYYY-MM-DD: ${endDate}`)
                // {
                //     alert("date doesn't match yyyy-mm-dd format!")
                //     return
                // }
                console.log("data", data);
                res = data
            })
            .catch(err => console.log("err", err))

        return res;
    }
    let finalRes = fetchData()
    return finalRes;
}
export { DateService }