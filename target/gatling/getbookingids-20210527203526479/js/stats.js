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
        "total": "917",
        "ok": "917",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3654",
        "ok": "3654",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2807",
        "ok": "2807",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1216",
        "ok": "1216",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3590",
        "ok": "3590",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3600",
        "ok": "3600",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3632",
        "ok": "3632",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3650",
        "ok": "3650",
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
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
    }
},
contents: {
"req_get-booking-ids-3b962": {
        type: "REQUEST",
        name: "get booking ids request",
path: "get booking ids request",
pathFormatted: "req_get-booking-ids-3b962",
stats: {
    "name": "get booking ids request",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "917",
        "ok": "917",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3654",
        "ok": "3654",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2807",
        "ok": "2807",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1216",
        "ok": "1216",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3590",
        "ok": "3590",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3600",
        "ok": "3600",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3632",
        "ok": "3632",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3650",
        "ok": "3650",
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
        "total": "2.5",
        "ok": "2.5",
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
