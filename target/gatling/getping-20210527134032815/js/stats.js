var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "888",
        "ok": "888",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3745",
        "ok": "3745",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2901",
        "ok": "2901",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1272",
        "ok": "1272",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3728",
        "ok": "3728",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3736",
        "ok": "3736",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3742",
        "ok": "3742",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3744",
        "ok": "3744",
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
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_get-ping-reques-56f76": {
        type: "REQUEST",
        name: "get ping request",
path: "get ping request",
pathFormatted: "req_get-ping-reques-56f76",
stats: {
    "name": "get ping request",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "888",
        "ok": "888",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3745",
        "ok": "3745",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2901",
        "ok": "2901",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1272",
        "ok": "1272",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3728",
        "ok": "3728",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3736",
        "ok": "3736",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3742",
        "ok": "3742",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3744",
        "ok": "3744",
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
        "total": "2",
        "ok": "2",
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
