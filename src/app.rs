use yew::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    let state = use_state(|| "Hello Itchat!");
    html! {
        <main>
            <img class="logo" src="https://yew.rs/img/logo.png" alt="Yew logo" />
            <h1>{ *state }</h1>
            <span class="subtitle">{ "from Yew with " }<i class="heart" /></span>
        </main>
    }
}
