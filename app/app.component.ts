import { Component } from '@angular/core';

import { QuoteService } from './services/quote/quote.services';
import { CompetitionsService } from './services/competitions/competitions.services';
import { FavoriteTeamsService } from './services/favorite_teams/favorite_teams.services';
import { TeamService } from './services/team/team.services';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ QuoteService, CompetitionsService, FavoriteTeamsService, TeamService ],
  styleUrls: ['app.component.css'],
})
export class AppComponent  {}
