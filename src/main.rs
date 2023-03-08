#[macro_use]
extern crate yew;
mod app;
mod components;
mod pages;
mod state;
mod utils;
use app::App;

fn main() {
    yew::Renderer::<App>::new().render();
}
