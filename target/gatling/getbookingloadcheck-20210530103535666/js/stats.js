var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "858",
        "ok": "-",
        "ko": "858"
    },
    "maxResponseTime": {
        "total": "1001",
        "ok": "-",
        "ko": "1001"
    },
    "meanResponseTime": {
        "total": "907",
        "ok": "-",
        "ko": "907"
    },
    "standardDeviation": {
        "total": "66",
        "ok": "-",
        "ko": "66"
    },
    "percentiles1": {
        "total": "862",
        "ok": "-",
        "ko": "862"
    },
    "percentiles2": {
        "total": "932",
        "ok": "-",
        "ko": "932"
    },
    "percentiles3": {
        "total": "987",
        "ok": "-",
        "ko": "987"
    },
    "percentiles4": {
        "total": "998",
        "ok": "-",
        "ko": "998"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "858",
        "ok": "-",
        "ko": "858"
    },
    "maxResponseTime": {
        "total": "1001",
        "ok": "-",
        "ko": "1001"
    },
    "meanResponseTime": {
        "total": "907",
        "ok": "-",
        "ko": "907"
    },
    "standardDeviation": {
        "total": "66",
        "ok": "-",
        "ko": "66"
    },
    "percentiles1": {
        "total": "862",
        "ok": "-",
        "ko": "862"
    },
    "percentiles2": {
        "total": "932",
        "ok": "-",
        "ko": "932"
    },
    "percentiles3": {
        "total": "987",
        "ok": "-",
        "ko": "987"
    },
    "percentiles4": {
        "total": "998",
        "ok": "-",
        "ko": "998"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
