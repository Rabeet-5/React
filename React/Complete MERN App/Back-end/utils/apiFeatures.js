class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                name: {
                    $regex: this.queryStr.keyword,
                    $options: 'i',
                },
            } : {}

        console.log(keyword)
        this.query = this.query.find({ ...keyword })

        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr };

        //Removing Fields for Categories
        const removeFields = ['keyword', 'page', 'limit'];

        removeFields.forEach(key => delete queryCopy[key])


        //filtering For Price and Ratings

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;

    }

    //Displaying Products Per Page 

    pagination(productPerPage) {

        const currentPage = Number(this.queryStr.page) || 1;
        const skipPage = productPerPage * (currentPage - 1);

        this.query = this.query.limit(productPerPage).skip(skipPage);
        return this;
    }
}

module.exports = ApiFeatures;