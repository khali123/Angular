Routing angular 

1---create moduleModule

create module App-routing.model.ts, module décoréer par @NgModule


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contacts",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

**Injection au niveau du module principale app.module.ts
  
  imports: [
    BrowserModule,
    AppRoutingModule => not class de routinng
  ],


2----
