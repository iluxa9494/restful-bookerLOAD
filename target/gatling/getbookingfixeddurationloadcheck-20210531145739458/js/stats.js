var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11384",
        "ok": "11384",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "187",
        "ok": "187",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2809",
        "ok": "2809",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "percentiles1": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "percentiles2": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles3": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles4": {
        "total": "926",
        "ok": "926",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11230,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 137,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "206.982",
        "ok": "206.982",
        "ko": "-"
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
        "total": "11384",
        "ok": "11384",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "187",
        "ok": "187",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2809",
        "ok": "2809",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "percentiles1": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "percentiles2": {
        "total": "221",
        "ok": "221",
        "ko": "-"
    },
    "percentiles3": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles4": {
        "total": "926",
        "ok": "926",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11230,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 137,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "206.982",
        "ok": "206.982",
        "ko": "-"
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
