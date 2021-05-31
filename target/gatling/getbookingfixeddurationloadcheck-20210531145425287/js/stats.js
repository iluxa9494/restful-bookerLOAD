var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11083",
        "ok": "60",
        "ko": "11023"
    },
    "minResponseTime": {
        "total": "186",
        "ok": "840",
        "ko": "186"
    },
    "maxResponseTime": {
        "total": "1866",
        "ok": "1696",
        "ko": "1866"
    },
    "meanResponseTime": {
        "total": "231",
        "ok": "1009",
        "ko": "226"
    },
    "standardDeviation": {
        "total": "104",
        "ok": "169",
        "ko": "86"
    },
    "percentiles1": {
        "total": "212",
        "ok": "950",
        "ko": "212"
    },
    "percentiles2": {
        "total": "221",
        "ok": "1055",
        "ko": "221"
    },
    "percentiles3": {
        "total": "285",
        "ok": "1311",
        "ko": "272"
    },
    "percentiles4": {
        "total": "920",
        "ok": "1546",
        "ko": "722"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 53,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 11023,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "201.509",
        "ok": "1.091",
        "ko": "200.418"
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
        "total": "11083",
        "ok": "60",
        "ko": "11023"
    },
    "minResponseTime": {
        "total": "186",
        "ok": "840",
        "ko": "186"
    },
    "maxResponseTime": {
        "total": "1866",
        "ok": "1696",
        "ko": "1866"
    },
    "meanResponseTime": {
        "total": "231",
        "ok": "1009",
        "ko": "226"
    },
    "standardDeviation": {
        "total": "104",
        "ok": "169",
        "ko": "86"
    },
    "percentiles1": {
        "total": "212",
        "ok": "950",
        "ko": "212"
    },
    "percentiles2": {
        "total": "221",
        "ok": "1055",
        "ko": "221"
    },
    "percentiles3": {
        "total": "285",
        "ok": "1311",
        "ko": "272"
    },
    "percentiles4": {
        "total": "920",
        "ok": "1546",
        "ko": "722"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 53,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 11023,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "201.509",
        "ok": "1.091",
        "ko": "200.418"
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
