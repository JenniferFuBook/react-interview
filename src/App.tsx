/**
 * @file App.tsx
 * @description Main entry point for the React application.
 * This project serves as the coding repository for the book "Acing the Frontend Interview".
 * To run a specific example, use the following command:
 *   VITE_NAME=<ExampleName> npm run dev
 * Replace <ExampleName> with the desired example name.
 * @author Jennifer Fu
 */
// import GlobalStyle from './styles/GlobalStyle';
import BlogPostExample from './use-cases/BlogPostExample';
import CssSpecificityExample from './use-cases/CssSpecificityExample';
import DragAndDrop from './components/drag-and-drop/DragAndDrop';
import FormSimple from './components/form/FormSimple';
import FormAdvanced from './components/form/FormAdvanced';
import Timer from './use-cases/Timer';
import YouTubeApiExample from './use-cases/YouTubeApiExample';
import DeclarativeUiExample from './use-cases/DeclarativeUiExample';
import BlogPostApp from './use-cases/BlogPostApp';
import PropDrillingExample from './use-cases/PropDrillingExample';
import ContextApiExample from './use-cases/ContextApiExample';
import SearchComponentExample from './use-cases/SearchComponentExample';
import RenderComponentExample from './use-cases/RenderComponentExample';
import UsePromiseExample from './use-cases/UsePromiseExample';
import DebounceExample from './use-cases/DebounceExample';
import TooltipExample from './use-cases/TooltipExample';
import ErrorBoundaryExample from './use-cases/ErrorBoundaryExample';
import ModularRouteApp from './use-cases/ModularRouteApp';
import ReactRouterExample from './use-cases/ReactRouterExample';
// import NestedRoutesExample from './use-cases/NestedRoutesExample';
// import ProtectedRouteExample from './use-cases/ProtectedRouteExample';
// import ReactWindowFixedSizeListExample from './use-cases/ReactWindowFixedSizeListExample';
// import ReactWindowVariableSizeGridExample from './use-cases/ReactWindowVariableSizeGridExample';
// import ReactVirtualizedListExample from './use-cases/ReactVirtualizedListExample';
// import ReactVirtuosoListExample from './use-cases/ReactVirtuosoListExample';
// import FormSimpleWithAxios from './components/form/FormSimpleWithAxios';
// import TanStackUseQueryExample from './use-cases/TanStackUseQueryExample';
// import TanStackUseMutationExample from './use-cases/TanStackUseMutationExample';
// import GraphQLExample from './use-cases/GraphQLExample';
// import FaviconExample from './use-cases/FaviconExample';

function App() {
  const exampleName = import.meta.env.VITE_NAME || 'BlogPostExample'; 
  // exampleName is Default to BlogPostExample if not set in environment variables
  // you can also hardcode it to any example you want to test, e.g., 'CssSpecificityExample'

  return (
    <>
      {/* <GlobalStyle /> */}
      
      {/* Chapter 2 examples */}
      {exampleName === 'BlogPostExample' && <BlogPostExample />}
      {exampleName === 'CssSpecificityExample' && <CssSpecificityExample />}
      {exampleName === 'DragAndDrop' && <DragAndDrop />}
      {exampleName === 'FormSimple' && <FormSimple />}
      {exampleName === 'FormAdvanced' && <FormAdvanced />}

      {/* Chapter 3 examples */}
      {exampleName === 'Timer' && <Timer />}
      {exampleName === 'YouTubeApiExample' && <YouTubeApiExample />}
  
      {/* Chapter 4, Appendix F, appendix G, and appendix H examples */}
      {exampleName === 'DeclarativeUiExample' && <DeclarativeUiExample />}
      {exampleName === 'BlogPostApp' && <BlogPostApp />}
      {exampleName === 'PropDrillingExample' && <PropDrillingExample />}
      {exampleName === 'ContextApiExample' && <ContextApiExample />}
      {exampleName === 'SearchComponentExample' && <SearchComponentExample />}
      {exampleName === 'RenderComponentExample' && <RenderComponentExample />}
      {exampleName === 'UsePromiseExample' && <UsePromiseExample />}
      {exampleName === 'DebounceExample' && <DebounceExample />}
      {exampleName === 'TooltipExample' && <TooltipExample />}
      {exampleName === 'ErrorBoundaryExample' && <ErrorBoundaryExample />}
      {exampleName === 'ModularRouteApp' && <ModularRouteApp />}
      {exampleName === 'ReactRouterExample' && <ReactRouterExample />}
      {/* <NestedRoutesExample /> */}
      {/* <ProtectedRouteExample /> */}
      {/* <ReactWindowFixedSizeListExample /> */}
      {/* <ReactWindowVariableSizeGridExample /> */}
      {/* <ReactVirtualizedListExample /> */}
      {/* <ReactVirtuosoListExample /> */}
      {/* <FormSimpleWithAxios /> */}
      {/* <TanStackUseQueryExample /> */}
      {/* <TanStackUseMutationExample /> */}
      {/* <GraphQLExample /> */}
      {/* <FaviconExample /> */}
    </>
  );
}

export default App;
