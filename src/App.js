import CreateAssignment from './components/CreateAssignment';

<Route path="/mentor/create-assignment" element={
  <ProtectedRoute>
    <CreateAssignment />
  </ProtectedRoute>
} /> 