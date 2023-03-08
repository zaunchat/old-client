use yewdux::prelude::*;
#[derive(Default, Clone, PartialEq, Eq, Store)]
pub struct State {
    pub email: String,
    pub password: String,
}