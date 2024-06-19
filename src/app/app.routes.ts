import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EnglishComponent } from './english/english.component';
import { DeutschComponent } from './deutsch/deutsch.component';
import { EspanolComponent } from './espanol/espanol.component';
import { ChineseComponent } from './chinese/chinese.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { RussianComponent } from './russian/russian.component';
import { FrenchComponent } from './french/french.component';
import { ItalianComponent } from './italian/italian.component';
import { PortugueseComponent } from './portuguese/portuguese.component';
import { UrduComponent } from './urdu/urdu.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'english', component: EnglishComponent },
  { path: 'deutsch', component: DeutschComponent},
  { path: 'espanol', component: EspanolComponent},
  { path: 'chinese', component: ChineseComponent},
  { path: 'japanese', component: JapaneseComponent},
  { path: 'russian', component: RussianComponent },
  { path: 'french', component: FrenchComponent},
  { path: 'italian', component: ItalianComponent},
  { path: 'portuguese', component: PortugueseComponent},
  { path: 'urdu', component: UrduComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
