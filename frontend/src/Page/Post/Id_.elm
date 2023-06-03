module Page.Post.Id_ exposing (Data, Model, Msg, page)

import DataSource exposing (DataSource)
import DataSource.Http
import Head
import Head.Seo as Seo
import OptimizedDecoder
import Page exposing (Page, StaticPayload)
import Pages.PageUrl exposing (PageUrl)
import Pages.Secrets
import Pages.Url
import Shared
import View exposing (View)


type alias Model =
    ()


type alias Msg =
    Never


type alias RouteParams =
    { id : String }


page : Page RouteParams Data
page =
    Page.prerender
        { head = head
        , routes = routes
        , data = data
        }
        |> Page.buildNoState { view = view }


routes : DataSource (List RouteParams)
routes =
    DataSource.succeed [ { id = "647505bb7416fb40f07e2f73" } ]



-- DataSource.Http.get
--     (Pages.Secrets.succeed
--         (\api -> api ++ "/posts")
--         |> Pages.Secrets.with "API_HOST"
--     )
--     (OptimizedDecoder.list <| OptimizedDecoder.map RouteParams <| OptimizedDecoder.field "id" OptimizedDecoder.string)


data : RouteParams -> DataSource Data
data routeParams =
    DataSource.succeed { id = "647505bb7416fb40f07e2f73", title = "Test" }



-- DataSource.Http.get
--     (Pages.Secrets.succeed
--         (\api -> api ++ "/posts/" ++ routeParams.id)
--         |> Pages.Secrets.with "API_HOST"
--     )
--     postDecoder


postDecoder : OptimizedDecoder.Decoder Data
postDecoder =
    OptimizedDecoder.map2 Data
        (OptimizedDecoder.field "id" OptimizedDecoder.string)
        (OptimizedDecoder.field "title" OptimizedDecoder.string)


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "elm-pages"
        , image =
            { url = Pages.Url.external "TODO"
            , alt = "elm-pages logo"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "TODO"
        , locale = Nothing
        , title = "TODO title" -- metadata.title -- TODO
        }
        |> Seo.website


type alias Data =
    { id : String
    , title : String
    }


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    View.placeholder "Post.Id_"
