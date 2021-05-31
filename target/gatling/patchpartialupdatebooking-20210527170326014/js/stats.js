var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "1059",
        "ok": "-",
        "ko": "1059"
    },
    "maxResponseTime": {
        "total": "3903",
        "ok": "-",
        "ko": "3903"
    },
    "meanResponseTime": {
        "total": "3027",
        "ok": "-",
        "ko": "3027"
    },
    "standardDeviation": {
        "total": "1272",
        "ok": "-",
        "ko": "1272"
    },
    "percentiles1": {
        "total": "3842",
        "ok": "-",
        "ko": "3842"
    },
    "percentiles2": {
        "total": "3854",
        "ok": "-",
        "ko": "3854"
    },
    "percentiles3": {
        "total": "3895",
        "ok": "-",
        "ko": "3895"
    },
    "percentiles4": {
        "total": "3901",
        "ok": "-",
        "ko": "3901"
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
        "total": "2",
        "ok": "-",
        "ko": "2"
    }
},
contents: {
"req_partial-update--bccdb": {
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
        "total": "1059",
        "ok": "-",
        "ko": "1059"
    },
    "maxResponseTime": {
        "total": "3903",
        "ok": "-",
        "ko": "3903"
    },
    "meanResponseTime": {
        "total": "3027",
        "ok": "-",
        "ko": "3027"
    },
    "standardDeviation": {
        "total": "1272",
        "ok": "-",
        "ko": "1272"
    },
    "percentiles1": {
        "total": "3842",
        "ok": "-",
        "ko": "3842"
    },
    "percentiles2": {
        "total": "3854",
        "ok": "-",
        "ko": "3854"
    },
    "percentiles3": {
        "total": "3895",
        "ok": "-",
        "ko": "3895"
    },
    "percentiles4": {
        "total": "3901",
        "ok": "-",
        "ko": "3901"
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
        "total": "2",
        "ok": "-",
        "ko": "2"
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
