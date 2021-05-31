var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "1",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "206",
        "ok": "4102",
        "ko": "206"
    },
    "maxResponseTime": {
        "total": "4102",
        "ok": "4102",
        "ko": "222"
    },
    "meanResponseTime": {
        "total": "1510",
        "ok": "4102",
        "ko": "214"
    },
    "standardDeviation": {
        "total": "1833",
        "ok": "0",
        "ko": "8"
    },
    "percentiles1": {
        "total": "222",
        "ok": "4102",
        "ko": "214"
    },
    "percentiles2": {
        "total": "2162",
        "ok": "4102",
        "ko": "218"
    },
    "percentiles3": {
        "total": "3714",
        "ok": "4102",
        "ko": "221"
    },
    "percentiles4": {
        "total": "4024",
        "ok": "4102",
        "ko": "222"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 67
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.375",
        "ok": "0.125",
        "ko": "0.25"
    }
},
contents: {
"req_get-booking-req-0a95b": {
        type: "REQUEST",
        name: "get booking request",
path: "get booking request",
pathFormatted: "req_get-booking-req-0a95b",
stats: {
    "name": "get booking request",
    "numberOfRequests": {
        "total": "3",
        "ok": "1",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "206",
        "ok": "4102",
        "ko": "206"
    },
    "maxResponseTime": {
        "total": "4102",
        "ok": "4102",
        "ko": "222"
    },
    "meanResponseTime": {
        "total": "1510",
        "ok": "4102",
        "ko": "214"
    },
    "standardDeviation": {
        "total": "1833",
        "ok": "0",
        "ko": "8"
    },
    "percentiles1": {
        "total": "222",
        "ok": "4102",
        "ko": "214"
    },
    "percentiles2": {
        "total": "2162",
        "ok": "4102",
        "ko": "218"
    },
    "percentiles3": {
        "total": "3714",
        "ok": "4102",
        "ko": "221"
    },
    "percentiles4": {
        "total": "4024",
        "ok": "4102",
        "ko": "222"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 67
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.375",
        "ok": "0.125",
        "ko": "0.25"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
