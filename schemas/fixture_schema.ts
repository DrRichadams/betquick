
type FixtureProps = {
    fixtureId: string,
    leagueId: string,
    leagueName: string,
    matchDate: string,
    teams: [],
    odds: {},
    location: string
}

export const fixtureSchema = ({
    fixtureId, leagueId, leagueName, matchDate, teams, odds, location
}
    : FixtureProps) => {
        return {
            _fixtureId: fixtureId,
            _leagueId: leagueId,
            _leagueName: leagueName,
            _matchDate: matchDate,
            _teams: teams,
            _odds: odds,
            _location: location

        }
}