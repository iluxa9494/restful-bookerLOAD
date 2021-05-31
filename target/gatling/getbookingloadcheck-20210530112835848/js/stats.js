var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "808",
        "ok": "808",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1260",
        "ok": "1260",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "961",
        "ok": "961",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "percentiles1": {
        "total": "960",
        "ok": "960",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1036",
        "ok": "1036",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1154",
        "ok": "1154",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1239",
        "ok": "1239",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 93
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "1.5",
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
        "total": "15",
        "ok": "15",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "808",
        "ok": "808",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1260",
        "ok": "1260",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "961",
        "ok": "961",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "percentiles1": {
        "total": "960",
        "ok": "960",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1036",
        "ok": "1036",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1154",
        "ok": "1154",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1239",
        "ok": "1239",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 93
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "1.5",
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
