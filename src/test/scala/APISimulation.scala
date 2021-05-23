package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class BasicSimulation extends Simulation {

  //http conf
  val httpConf = http.baseUrl("")
    .header("Accept", value = "application/json")

  //scenario
  val scn = scenario("get list")
    .exec(http("get user request")
      .get("")
      .check(status is 200))

  //setup
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
