var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "196",
        "ok": "3620",
        "ko": "196"
    },
    "maxResponseTime": {
        "total": "3620",
        "ok": "3620",
        "ko": "196"
    },
    "meanResponseTime": {
        "total": "1908",
        "ok": "3620",
        "ko": "196"
    },
    "standardDeviation": {
        "total": "1712",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1908",
        "ok": "3620",
        "ko": "196"
    },
    "percentiles2": {
        "total": "2764",
        "ok": "3620",
        "ko": "196"
    },
    "percentiles3": {
        "total": "3449",
        "ok": "3620",
        "ko": "196"
    },
    "percentiles4": {
        "total": "3586",
        "ok": "3620",
        "ko": "196"
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
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.125",
        "ko": "0.125"
    }
},
contents: {
"req_create-booking--d5d4d": {
        type: "REQUEST",
        name: "create booking request",
path: "create booking request",
pathFormatted: "req_create-booking--d5d4d",
stats: {
    "name": "create booking request",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3620",
        "ok": "3620",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3620",
        "ok": "3620",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3620",
        "ok": "3620",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3620",
        "ok": "3620",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3620",
        "ok": "3620",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3620",
        "ok": "3620",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3620",
        "ok": "3620",
        "ko": "-"
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
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.125",
        "ok": "0.125",
        "ko": "-"
    }
}
    },"req_get-booking-req-0a95b": {
        type: "REQUEST",
        name: "get booking request",
path: "get booking request",
pathFormatted: "req_get-booking-req-0a95b",
stats: {
    "name": "get booking request",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "196",
        "ok": "-",
        "ko": "196"
    },
    "maxResponseTime": {
        "total": "196",
        "ok": "-",
        "ko": "196"
    },
    "meanResponseTime": {
        "total": "196",
        "ok": "-",
        "ko": "196"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "196",
        "ok": "-",
        "ko": "196"
    },
    "percentiles2": {
        "total": "196",
        "ok": "-",
        "ko": "196"
    },
    "percentiles3": {
        "total": "196",
        "ok": "-",
        "ko": "196"
    },
    "percentiles4": {
        "total": "196",
        "ok": "-",
        "ko": "196"
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.125",
        "ok": "-",
        "ko": "0.125"
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
