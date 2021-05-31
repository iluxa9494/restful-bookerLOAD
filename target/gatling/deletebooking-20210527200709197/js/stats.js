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
        "ok": "3645",
        "ko": "196"
    },
    "maxResponseTime": {
        "total": "3645",
        "ok": "3645",
        "ko": "196"
    },
    "meanResponseTime": {
        "total": "1921",
        "ok": "3645",
        "ko": "196"
    },
    "standardDeviation": {
        "total": "1725",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1921",
        "ok": "3645",
        "ko": "196"
    },
    "percentiles2": {
        "total": "2783",
        "ok": "3645",
        "ko": "196"
    },
    "percentiles3": {
        "total": "3473",
        "ok": "3645",
        "ko": "196"
    },
    "percentiles4": {
        "total": "3611",
        "ok": "3645",
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
        "total": "0.4",
        "ok": "0.2",
        "ko": "0.2"
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
        "total": "3645",
        "ok": "3645",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3645",
        "ok": "3645",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3645",
        "ok": "3645",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3645",
        "ok": "3645",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3645",
        "ok": "3645",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3645",
        "ok": "3645",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3645",
        "ok": "3645",
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
        "total": "0.2",
        "ok": "0.2",
        "ko": "-"
    }
}
    },"req_delete-booking--88ce3": {
        type: "REQUEST",
        name: "delete booking request",
path: "delete booking request",
pathFormatted: "req_delete-booking--88ce3",
stats: {
    "name": "delete booking request",
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
        "total": "0.2",
        "ok": "-",
        "ko": "0.2"
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
