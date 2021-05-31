var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "0",
        "ko": "20"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "-",
        "ko": "223"
    },
    "maxResponseTime": {
        "total": "3920",
        "ok": "-",
        "ko": "3920"
    },
    "meanResponseTime": {
        "total": "1641",
        "ok": "-",
        "ko": "1641"
    },
    "standardDeviation": {
        "total": "1688",
        "ok": "-",
        "ko": "1688"
    },
    "percentiles1": {
        "total": "601",
        "ok": "-",
        "ko": "601"
    },
    "percentiles2": {
        "total": "3911",
        "ok": "-",
        "ko": "3911"
    },
    "percentiles3": {
        "total": "3920",
        "ok": "-",
        "ko": "3920"
    },
    "percentiles4": {
        "total": "3920",
        "ok": "-",
        "ko": "3920"
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
    "count": 20,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "-",
        "ko": "2.5"
    }
},
contents: {
"req_add-user-reques-46550": {
        type: "REQUEST",
        name: "add user request",
path: "add user request",
pathFormatted: "req_add-user-reques-46550",
stats: {
    "name": "add user request",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "949",
        "ok": "-",
        "ko": "949"
    },
    "maxResponseTime": {
        "total": "3920",
        "ok": "-",
        "ko": "3920"
    },
    "meanResponseTime": {
        "total": "3042",
        "ok": "-",
        "ko": "3042"
    },
    "standardDeviation": {
        "total": "1332",
        "ok": "-",
        "ko": "1332"
    },
    "percentiles1": {
        "total": "3911",
        "ok": "-",
        "ko": "3911"
    },
    "percentiles2": {
        "total": "3912",
        "ok": "-",
        "ko": "3912"
    },
    "percentiles3": {
        "total": "3920",
        "ok": "-",
        "ko": "3920"
    },
    "percentiles4": {
        "total": "3920",
        "ok": "-",
        "ko": "3920"
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
    },"req_get-user-reques-a4fef": {
        type: "REQUEST",
        name: "get user request",
path: "get user request",
pathFormatted: "req_get-user-reques-a4fef",
stats: {
    "name": "get user request",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "-",
        "ko": "223"
    },
    "maxResponseTime": {
        "total": "252",
        "ok": "-",
        "ko": "252"
    },
    "meanResponseTime": {
        "total": "239",
        "ok": "-",
        "ko": "239"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "-",
        "ko": "11"
    },
    "percentiles1": {
        "total": "241",
        "ok": "-",
        "ko": "241"
    },
    "percentiles2": {
        "total": "249",
        "ok": "-",
        "ko": "249"
    },
    "percentiles3": {
        "total": "252",
        "ok": "-",
        "ko": "252"
    },
    "percentiles4": {
        "total": "252",
        "ok": "-",
        "ko": "252"
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
