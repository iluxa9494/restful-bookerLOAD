var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "202",
        "ok": "944",
        "ko": "202"
    },
    "maxResponseTime": {
        "total": "3819",
        "ok": "3819",
        "ko": "275"
    },
    "meanResponseTime": {
        "total": "1573",
        "ok": "2917",
        "ko": "229"
    },
    "standardDeviation": {
        "total": "1618",
        "ok": "1274",
        "ko": "21"
    },
    "percentiles1": {
        "total": "610",
        "ok": "3737",
        "ko": "223"
    },
    "percentiles2": {
        "total": "3736",
        "ok": "3739",
        "ko": "230"
    },
    "percentiles3": {
        "total": "3752",
        "ok": "3787",
        "ko": "269"
    },
    "percentiles4": {
        "total": "3806",
        "ok": "3813",
        "ko": "274"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "1.25",
        "ko": "1.25"
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
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "944",
        "ok": "944",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3819",
        "ok": "3819",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2917",
        "ok": "2917",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1274",
        "ok": "1274",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3737",
        "ok": "3737",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3739",
        "ok": "3739",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3787",
        "ok": "3787",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3813",
        "ok": "3813",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "1.25",
        "ko": "-"
    }
}
    },"req_partial-update--bccdb": {
        type: "REQUEST",
        name: "partial update booking request",
path: "partial update booking request",
pathFormatted: "req_partial-update--bccdb",
stats: {
    "name": "partial update booking request",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "202",
        "ok": "-",
        "ko": "202"
    },
    "maxResponseTime": {
        "total": "275",
        "ok": "-",
        "ko": "275"
    },
    "meanResponseTime": {
        "total": "229",
        "ok": "-",
        "ko": "229"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "percentiles1": {
        "total": "223",
        "ok": "-",
        "ko": "223"
    },
    "percentiles2": {
        "total": "230",
        "ok": "-",
        "ko": "230"
    },
    "percentiles3": {
        "total": "269",
        "ok": "-",
        "ko": "269"
    },
    "percentiles4": {
        "total": "274",
        "ok": "-",
        "ko": "274"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "-",
        "ko": "1.25"
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
